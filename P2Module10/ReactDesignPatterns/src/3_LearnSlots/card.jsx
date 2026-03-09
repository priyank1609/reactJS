import React from 'react'

const Card = ({ header, body, footer }) => {
    return (
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg text-white">
            {header && <div className="p-4 bg-gray-900 flex gap-4">{header}</div>}
            {body && <div className="p-4">{body}</div>}
            {footer && <div className="p-4 bg-gray-900">{footer}</div>}
        </div>
    )
}

export default Card
