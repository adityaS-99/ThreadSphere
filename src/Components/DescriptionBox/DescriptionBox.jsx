import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>

        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto 
                nesciunt aliquam accusamus, consequuntur ab similique cum, pariatur 
                earum cupiditate quaerat rem fuga autem quis laudantium unde 
                doloremque recusandae perferendis suscipit vero? Fugit repellat nam ducimus, 
                molestiae aliquam necessitatibus? Soluta nam itaque culpa maxime neque minima. 
                Tempora inventore repudiandae nam commodi.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas totam aperiam quibusdam, deleniti eaque optio molestias quam sed id delectus!</p>
        </div>
    </div>
  )
}

export default DescriptionBox