import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Link from 'next/link'
import Layout from '../components/layout'
import {useFetchUser}from '../lib/user'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

const BooksBlog = ({allPostsData}) => {
    const { user, loading } = useFetchUser()
    return (
        <>
        <Layout user={user} loading={loading} >
            <section className={`${utilStyles.headingMd} ${utilStyles.padding10px}`}>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
        </>
    );
}

export default BooksBlog;
