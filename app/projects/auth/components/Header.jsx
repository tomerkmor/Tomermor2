import logoImg from '@/public/assets/auth/logo.jpg';
import Image from 'next/image';

import classes from './Header.module.css'
export default function Header() {
  return (
    <header>
      <Image src={logoImg} width={150} height={150} alt="A form and a pencil" className={classes['logo']}/>
      <h1>React Forms</h1>
    </header>
  );
}
