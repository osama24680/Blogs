import React,{ useState, useEffect} from 'react'
import Link from "next/link"
import { getCategories } from '../services'

const Header = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategories()
            .then(result => setCategories(result))
    }, [])
    console.log(categories)
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white">
                            GraphCMS
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((cat,index)=>(
                        <Link key={index} href={`/category/${cat.slug}`}>
                            <span className="md:float-right ` mt-2 ml-4 align-middle text-white font-semibold cursor-pointer">
                                {cat.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
