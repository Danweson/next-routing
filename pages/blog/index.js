import Link from "next/link"
import prisma from '../../lib/prisma';

function Blog({posts}){
    
    return (
        
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <h1>Blog Page </h1>
        <table className="table table-striped table-sm dt-responsive">
                <thead>
                  <tr>
                      <th scope="col" className="text-center">No</th>
                      <th scope="col" className="text-center"> Titre</th>
                      <th scope="col" className="text-center">Description</th>
                      <th scope="col" className="text-center">Auteur</th>
                      <th scope="col" className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post, index) => {
                      return(
                        <tr key={index}>
                            
                            <td className="text-center">{index+1}</td>
                            <td className="text-center">{post.title}</td>
                            <td className="text-center">{post.content}</td>
                            <td className="text-center">{post.author.name}</td>
                            <td className="text-center">
                                <Link href={`/blog/${post.id}`} passHref>
                                    <a>View</a>
                                </Link>
                                <a><i className="bi bi-pencil-fill text-primary mx-2"></i></a>
                                <a><i className="bi bi-trash3-fill text-danger mx-2"></i></a>
                            </td>
                        </tr>
                      )
                  })}
                </tbody>
        </table>
    </div>
    )
}

export default Blog 

export async function getStaticProps() {

    const posts = await prisma.post.findMany({

        where: { published: true },
    
        include: {
    
          author: {
    
            select: { name: true },
    
          },
    
        },
    
    });

    return {
      props: {
        posts: posts,
      },
    }
  }