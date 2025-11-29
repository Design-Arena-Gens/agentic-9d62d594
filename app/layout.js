export const metadata = {
  title: 'Houses in Sudan - Traditional & Modern Architecture',
  description: 'Explore the diverse architectural styles of Sudanese houses, from traditional mud brick structures to modern urban homes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
