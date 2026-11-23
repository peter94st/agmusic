export default function CustomIcon ({ source, alt, size, invert = false }) {


    return (
        <img 
            src={source} 
            alt={alt}
            style={{
                width: `${size * 4}px`,
                height: `${size * 4}px`,
                filter: invert ? "invert(1)" : "none"
            }}
            className="object-contain"
        />
    )
}