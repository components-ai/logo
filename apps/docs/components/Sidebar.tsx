import { Editor } from '@compai/css-gui'

type SidebarProps = {
  styles: any
  onChange: (newStyles: any) => void
}
export const Sidebar = ({ styles, onChange }: SidebarProps) => {
  return (
    <nav
      sx={{
        minHeight: '100vh',
        width: ['100%', 320],
        minWidth: ['100%', 320],
        borderLeft: 'thin solid',
        borderColor: 'border',
        py: [2, 3, 4],
        px: [1, 2, 3],
        position: ['relative', 'sticky'],
        overflowY: 'auto',
        top: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Editor styles={styles} onChange={onChange} />
    </nav>
  )
}
