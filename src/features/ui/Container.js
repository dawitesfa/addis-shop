export const Container = ({ width, children, className, style }) => {
  return (
    <div
      className={className}
      style={{ ...style, margin: '0 auto', width: width }}
    >
      {children}
    </div>
  )
}

Container.defaultProps = { width: '90%' }
