import './style.css'
import { Link } from 'react-router-dom';


function BuyNow() {
    return (
        <>
            <div className="buyNow">
                <div className='buyNow-content'>
                    <h1>Bánh Mì</h1>
                    <p>Bánh mì là một món ăn truyền thống ngon và phổ biến trên khắp thế giới.
                        Đó là một sự kết hợp tuyệt vời giữa lớp vỏ ngoài giòn tan và bên trong mềm mịn.
                        Vỏ bánh mì thường có màu vàng nâu, với mùi thơm quyến rũ bắt đầu lan tỏa khi bạn cắt nó ra.
                    </p>
                    <p>
                        Khi bạn chạm vào bề mặt mịn màng của bánh mì, bạn có thể cảm nhận được độ ẩm và độ mềm của nó.
                        Bên trong, bánh mì thường có cấu trúc độc đáo,
                        với các lớp vụn bên trong tạo nên sự hấp dẫn đặc biệt. Mùi thơm của bánh mì mới nướng luôn làm cho bạn cảm thấy đói đấy.
                    </p>
                    <p>
                        Bánh mì có thể được ăn kèm với nhiều loại thực phẩm khác nhau, từ thịt nguội,
                        phô mai, rau sống cho đến gia vị và sốt tùy ý. Mỗi miếng bánh mì đều là một hòa quyện hoàn hảo của vị ngon và hương thơm,
                        làm cho món ăn trở nên không thể cưỡng lại.
                    </p>
                    <Link to={ "/product" }>
                        <button className='buyNow-btn'>MUA NGAY &#8594;</button>
                    </Link>
                </div>
                
            </div>
        </>
  );
}

export default BuyNow;