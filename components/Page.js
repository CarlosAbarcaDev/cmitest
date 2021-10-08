import React from 'react';
import Link from 'next/link'

const Page = ({title, linkTo}) => {
    return ( 
      <>
        <h2>Welcome to {title}</h2>
        <Link href={linkTo} > <a> go to </a></Link>
     </>
     );
}
 
export default Page;