import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

export default function SitemapCard({ head, icon, links = [] }) {
    return (
        <Card>
            <CardHeader>
                <i className={icon}></i>
                <h3>{head}</h3>
            </CardHeader>
            <CardBody>
                {links.map((item, index) => (
                    <Link href={item.url} key={`link${index}`}>
                        <strong className='fw-semibold'>{item.name}</strong>
                        <span className='text-muted fw-medium'>{item.description}</span>
                    </Link>
                ))}
            </CardBody>
        </Card>
    )
}


const Card = styled.div`
    border-radius: .5rem;
    border: 1px solid #e5e5e5;
    height: 100%;
`
const CardHeader = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: start;

    i {
        font-size: 1.5em;
        padding: 0.5rem;
        border-radius: .2rem;
        background: #ebebeb;
        color: #933435;
        // margin-right: .2rem
    }
    h3{
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.75rem;
        color: #0059b1;
    }
`

const CardBody = styled.div`
    width: 100%;
    padding: 0 0.5rem;
    a {
    color:#fba504;
        display: flex;
        flex-direction: column;
        padding: 0.75rem;
        margin: .5rem 0;
        &:hover{
            border-radius: .2rem;
            background: #ebebeb;
        }
    }
`