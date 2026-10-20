import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface AppDocFrontMatter {
  title?: string
  appName?: string
  packageName?: string
  developer?: string
  lastUpdated?: string
  effectiveDate?: string
  supportEmail?: string
  [key: string]: any
}

export interface AppDocData {
  found: boolean
  appSlug: string
  docType: 'privacy-policy' | 'terms'
  frontMatter: AppDocFrontMatter
  content: string
}

export interface AppSummary {
  slug: string
  appName: string
  packageName?: string
  hasPrivacyPolicy: boolean
  hasTerms: boolean
  lastUpdated?: string
}

const APPS_DIR = path.join(process.cwd(), 'src/_apps')

/**
 * Normalizes an app slug:
 * e.g. "Math Adventure" -> "math-adventure"
 *      "mathAdventure"  -> "math-adventure"
 *      "math_adventure" -> "math-adventure"
 */
export function normalizeSlug(raw: string): string {
  if (!raw) return ''
  return raw
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Converts a slug into a formatted display name
 * e.g. "math-adventure" -> "Math Adventure"
 */
export function slugToDisplayName(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Returns all app folder names in `src/_apps`
 */
export function getRegisteredAppFolders(): string[] {
  if (!fs.existsSync(APPS_DIR)) {
    return []
  }
  return fs.readdirSync(APPS_DIR).filter((file) => {
    const fullPath = path.join(APPS_DIR, file)
    return fs.statSync(fullPath).isDirectory()
  })
}

/**
 * Resolves a raw appname parameter to the corresponding folder in `src/_apps`
 */
export function resolveAppDirectory(appname: string): string | null {
  const folders = getRegisteredAppFolders()
  if (folders.includes(appname)) {
    return appname
  }

  const targetNormalized = normalizeSlug(appname)
  for (const folder of folders) {
    if (normalizeSlug(folder) === targetNormalized) {
      return folder
    }
  }

  return null
}

/**
 * Returns static paths params for all apps, including canonical and common variants
 */
export function getAppStaticPathsParams(): { appname: string }[] {
  const folders = getRegisteredAppFolders()
  const paths: { appname: string }[] = []

  folders.forEach((folder) => {
    // Add exact directory name
    paths.push({ appname: folder })

    // Add normalized slug if different
    const norm = normalizeSlug(folder)
    if (norm !== folder && !paths.some((p) => p.appname === norm)) {
      paths.push({ appname: norm })
    }

    // Add camelCase variant if applicable (e.g. mathAdventure)
    const camel = folder
      .split(/[-_]+/)
      .map((part, idx) =>
        idx === 0 ? part.toLowerCase() : part.charAt(0).toUpperCase() + part.slice(1),
      )
      .join('')
    if (camel !== folder && !paths.some((p) => p.appname === camel)) {
      paths.push({ appname: camel })
    }
  })

  return paths
}

/**
 * Loads the markdown document for a specific app and document type
 */
export function getAppDoc(rawAppName: string, docType: 'privacy-policy' | 'terms'): AppDocData {
  const resolvedFolder = resolveAppDirectory(rawAppName)
  const appSlug = resolvedFolder || normalizeSlug(rawAppName)
  const docFileName = `${docType}.md`

  if (resolvedFolder) {
    const filePath = path.join(APPS_DIR, resolvedFolder, docFileName)
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)

      const frontMatter: AppDocFrontMatter = {
        title:
          data.title ||
          (docType === 'privacy-policy'
            ? `Privacy Policy for ${slugToDisplayName(appSlug)}`
            : `Terms and Conditions for ${slugToDisplayName(appSlug)}`),
        appName: data.appName || slugToDisplayName(appSlug),
        packageName: data.packageName || `com.bihobol.${appSlug.replace(/-/g, '')}`,
        developer: data.developer || 'Bihobol',
        lastUpdated: data.lastUpdated || '',
        effectiveDate: data.effectiveDate || '',
        supportEmail: data.supportEmail || 'support@bihobol.com',
        ...data,
      }

      return {
        found: true,
        appSlug: resolvedFolder,
        docType,
        frontMatter,
        content,
      }
    }
  }

  // Fallback if document not found
  const fallbackTitle =
    docType === 'privacy-policy'
      ? `Privacy Policy for ${slugToDisplayName(appSlug)}`
      : `Terms and Conditions for ${slugToDisplayName(appSlug)}`
  return {
    found: false,
    appSlug,
    docType,
    frontMatter: {
      title: fallbackTitle,
      appName: slugToDisplayName(appSlug),
      developer: 'Bihobol',
      supportEmail: 'support@bihobol.com',
    },
    content: `# ${fallbackTitle}\n\nThe requested ${
      docType === 'privacy-policy' ? 'Privacy Policy' : 'Terms and Conditions'
    } document for **${slugToDisplayName(
      appSlug,
    )}** is currently being prepared.\n\nPlease check back soon or contact support at [support@bihobol.com](mailto:support@bihobol.com).`,
  }
}

/**
 * Returns a summary list of all registered applications
 */
export function getAllAppsSummary(): AppSummary[] {
  const folders = getRegisteredAppFolders()
  return folders.map((folder) => {
    const privacyData = getAppDoc(folder, 'privacy-policy')
    const termsData = getAppDoc(folder, 'terms')

    return {
      slug: folder,
      appName: privacyData.frontMatter.appName || slugToDisplayName(folder),
      packageName: privacyData.frontMatter.packageName,
      hasPrivacyPolicy: privacyData.found,
      hasTerms: termsData.found,
      lastUpdated: privacyData.frontMatter.lastUpdated || termsData.frontMatter.lastUpdated,
    }
  })
}
