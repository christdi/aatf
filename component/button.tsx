import Link from "next/link"

import styles from '@/css/button.module.css'

export interface ButtonProperties {
  children: React.ReactNode,
  href: string,
  onClick?: () => void
}

export default function Button({ children, href, onClick = () => { } }: ButtonProperties) {
  return (
    <>
      <Link className={styles.btn} href={href} onClick={onClick}>{children}</Link>
    </>
  )
}