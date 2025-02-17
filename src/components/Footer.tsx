import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="border-t border-zinc-800/30 backdrop-blur-sm mt-12">
            <div className="container mx-auto px-4 py-6 text-center text-zinc-500">
                <p>Built with precision and performance in mind</p>
            </div>
        </footer>
    )
}

export default Footer