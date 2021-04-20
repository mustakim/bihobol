import React from 'react'
interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer style={{ textAlign: 'center' }}>
            <p>&copy; Bihobol - Next Gen Blog Page | {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer