// Compatibility polyfills for modern Node.js versions (e.g. Node >= 22/26)
const buffer = require('buffer')
if (!buffer.SlowBuffer) {
  buffer.SlowBuffer = buffer.Buffer
}
