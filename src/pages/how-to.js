import React from "react"
import Layout from "../components/layout"

import { Link, graphql } from "gatsby"

const BlogTemplate = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>TITLE</h1>
        <p>Written By: Author of Blogs</p>
        <br />
        <section>
          <h3>Description</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            repellat dignissimos cum maxime, accusamus tempora eos magni quam,
            fuga magnam officia fugiat. Fugit obcaecati commodi doloribus
            impedit laborum? Vero, perferendis nobis nemo fugiat aliquam numquam
            natus pariatur alias eius quaerat quis. Libero eius delectus aut ea
            quibusdam, molestiae rerum magni!
          </p>
        </section>
        <section>
          <h3>Step 1: Do this</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            repellat dignissimos cum maxime, accusamus tempora eos magni quam,
            fuga magnam officia fugiat. Fugit obcaecati commodi doloribus
            impedit laborum? Vero, perferendis nobis nemo fugiat aliquam numquam
            natus pariatur alias eius quaerat quis. Libero eius delectus aut ea
            quibusdam, molestiae rerum magni!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            praesentium odio distinctio laboriosam quam at nam eaque debitis?
            Est, explicabo.
          </p>
        </section>
        <section>
          <h3>Step 2: Here's the catch</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non cumque
            placeat ratione, doloremque iste corrupti fuga et nostrum possimus
            eligendi error recusandae atque ad. Hic distinctio odio culpa
            perferendis consequuntur.
          </p>
        </section>
        <section>
          <h3>Step 3: What's this?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non cumque
            placeat ratione, doloremque iste corrupti fuga et nostrum possimus
            eligendi error recusandae atque ad. Hic distinctio odio culpa
            perferendis consequuntur.
          </p>
        </section>
        <section>
          <h3>Section 4: SPECIAL TRICK HERE!</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non cumque
            placeat ratione, doloremque iste corrupti fuga et nostrum possimus
            eligendi error recusandae atque ad. Hic distinctio odio culpa
            perferendis consequuntur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore
            nihil placeat dolor quis, molestiae rerum quibusdam accusamus ipsam
            esse unde exercitationem necessitatibus ea, voluptatem dolore illo
            amet repudiandae nobis quam quia. Minus, saepe molestias! Mollitia
            laborum et praesentium quas fugit delectus vel ea, consequatur
            explicabo, rem velit odio illo. Fugit cupiditate eligendi libero non
            quam facilis consequuntur blanditiis rerum.
          </p>
        </section>
        <br />
        <section>
          <h3>CALL TO ACTION BABY</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non cumque
            placeat ratione, doloremque iste corrupti fuga et nostrum possimus
            eligendi error recusandae atque ad. Hic distinctio odio culpa
            perferendis consequuntur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore
            nihil placeat dolor quis, molestiae rerum quibusdam accusamus ipsam
            esse unde exercitationem necessitatibus ea, voluptatem dolore illo
            amet repudiandae nobis quam quia. Minus, saepe molestias! Mollitia
            laborum et praesentium quas fugit delectus vel ea, consequatur
            explicabo, rem velit odio illo. Fugit cupiditate eligendi libero non
            quam facilis consequuntur blanditiis rerum.
          </p>
          <Link to="/#">CLICK HERE BB</Link>
        </section>
      </div>
    </Layout>
  )
}

export default BlogTemplate

// export const blogQuery = graphql`

// `
