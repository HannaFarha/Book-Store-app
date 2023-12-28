import "./modal.css"
import Rating from "../book-slider/Rating"
const Modal = ({bookData,setOpenModal}) => {
    const{image,title,inStock,rating ,reviews,author,price}=bookData;
    return ( <div onClick={()=>setOpenModal(false)} className="modal-container">
        <div onClick={(event)=>event.stopPropagation()} className="modal-content">
            <i onClick={()=>setOpenModal(false)} className ="bi bi-x-circle-fill modal-icon"></i>  
            <div className="modal-content-img">
                <img src={`/books/${image}`} alt={title}/>
                </div> 
                <div className="modal-content-info">
                    <h5 className="modal-content-info-title">{title}</h5>
                    <div className="modal-content-info-stock"><b>Status:   </b>{inStock ? "  inStock" :"not in stock"}</div>
                    <Rating rating={rating} reviews={reviews} />
                    <div className="modal-content-info-author">Author :{author}</div>
                    <div className="modal-content-info-price"><b>Price: </b> {price} $ </div>
                    <div className="modal-add-to-cart"><input
              className="modal-add-to-cart-input"
              type="number"
              min="1"
              max="100"/>
              <button className="modal-add-to-cart-btn">
                <i className="bi bi-cart-plus"></i> 
                Add To Cart</button>

            </div>
            <div className="modal-content-info-link">See More Details</div>
                    </div> 
            </div>
    </div>  );
}
 
export default Modal;