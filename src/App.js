import react from "react";
import './App.css';
import { AiOutlineInstagram } from "react-icons/ai";
import {AiOutlineHeart}  from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTablet } from "react-icons/ai";
import { AiFillTwitterCircle} from "react-icons/ai";
import { ImCross, ImFontSize } from "react-icons/im";
import {AiOutlineSetting} from "react-icons/ai" ;
function App() {
  return (
    <>
      <div>


        {/* <div style={{ display: "flex", flexDirection: "row", background: "#696969", height: "50px" }}>
          <div style={{ color: "white", fontSize: "40px" }}>Colorlib</div>
          <div style={{ background: "black", textalign: "center", color: "white", width: "80px", gap: "1in", padding: "10px", }} >+ VERTEX</div>

          <div style={{ color: "white", padding: "10px", display: "flex", flexDirection: "row", position: "relative", float: "right", marginLeft: "1000px", alignItems: "center", justifyContent: "center" }}>
            <div style={{ margin: "5px", gap: "2in", display: "flex", width: "50px" }}>
              <AiOutlineMobile />
            </div>
            <div style={{ width: "50px" }}>
              <AiOutlineTablet />
            </div>
            <div style={{ width: "50px" }}>
              <AiOutlineDesktop />
            </div>
            <div style={{ width: "50px" }}>
              <ImCross />
            </div>
          </div>
        </div> */}

        <div className="container">
          <div className="vertex">
            <span >VERTEX</span>
            <ul className="navlist">
              <li>Home</li>
              <li>What we do</li>
              <li>Projects</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="middlecontent">
            <p>we are  VERTEX, Construction and development</p>
            <h2>Construction is Our Life
              Business!</h2>
          </div>
          <div className="numberpart">
          <div className="numberflex">
            <div className="internumber">1,000</div>
            <div className="internumber">12,000</div>
            <div className="internumber">10,000</div>
            <div className="internumber">15,000</div>
            </div>
            <div className="textflex">
            <div classname="textpart">
            Years on the market
            </div>
            <div classname="textpart">
            Operational Brigades
            </div>
            <div classname="textpart">
            Units of Engineering
            </div>
            <div classname="textpart">
            Employees of the company
            </div>
            </div>
          </div>
        </div>

        <div className="counting">
          <h2>Your main features and Benefits</h2>

          <div className="outerbox">
            <div className="interbox" >
              <div  classname="intericon">
                <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-setting-advertising-xnimrodx-blue-xnimrodx-2.png"/>
              </div>
              <h5>CONSTRUCTION MANAGEMENT</h5>
              Even the all-powerful Pointing has no control about the blind texts
              it is an almost unorthographic.
            </div>
            <div className="interbox">
            <div  classname="intericon">
                <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-setting-advertising-xnimrodx-blue-xnimrodx-2.png"/>
              </div>
              <h5>PRE-CONSTRUCTION SERVICES</h5>
              Even the all-powerful Pointing has no control about the blind texts
              it is an almost unorthographic.
            </div>
            <div className="interbox">
            <div  classname="intericon">
                <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-setting-advertising-xnimrodx-blue-xnimrodx-2.png"/>
              </div>
              <h5>CONSTRUCTION SERVICES</h5>
              Even the all-powerful Pointing has no control about the
              blind texts it is an almost unorthographic.
            </div>
            <div className="interbox">
            <div  classname="intericon">
                <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-setting-advertising-xnimrodx-blue-xnimrodx-2.png"/>
              </div>
              <h5>GENERAL CONSTRUCTING</h5>
              Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic.
            </div>
          </div>
        </div>

        <div className="picpart">

          <div className="para">
             <h4>we love to share our accomplishments</h4> </div>

          <div className="images">
            <div className="img1">
              <img src="https://preview.colorlib.com/theme/vertex/images/ximage_1.jpg.pagespeed.ic.VFgWXX8Nfk.webp" />
            </div>
            <div className=" imagepart">
              <div className="img2">
                <img src="https://preview.colorlib.com/theme/vertex/images/ximage_2.jpg.pagespeed.ic.VobdgpzuPf.webp" />
              </div>
              <div className="img3">
                <img src="https://preview.colorlib.com/theme/vertex/images/ximage_3.jpg.pagespeed.ic.vck7s99qTv.webp" />
              </div>
            </div>
          </div>
        </div>

        <div className="quotepart">

          <div className="quote">
            <h3>Experience Our Advance Equipments</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Commodi unde impedit, necessitatibus, soluta sit quam minima
              expedita atque corrupti reiciendis.</p>
          </div>
          <button>Request a Quote</button>
        </div>

        <div className="peopleview">
          <div className="love">
            <h2>Love using vertex</h2>
          </div>
          <div className="review">
            <div className="reviewbox" >
              <div className="peopleimg">
                <img src="https://preview.colorlib.com/theme/vertex/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp" />
              </div>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
              <p style={{ color: "blue" }}>Dennis Green</p>
            </div>
            <div className="reviewbox">
              <div className="peopleimg">
                <img src="https://preview.colorlib.com/theme/vertex/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp" />
              </div>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
              <p style={{ color: "blue" }}>Dennis Green</p>
            </div>
            <div className="reviewbox">
              <div className="peopleimg">
                <img src="https://preview.colorlib.com/theme/vertex/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp" />
              </div>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
              <p style={{ color: "blue" }}>Dennis Green</p>
            </div>
            <div className="reviewbox">
              <div className="peopleimg">
                <img src="https://preview.colorlib.com/theme/vertex/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp" />
              </div>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
              <p style={{ color: "blue" }}>Dennis Green</p>
            </div>
            <div className="reviewbox">
              <div className="peopleimg">
                <img src="https://preview.colorlib.com/theme/vertex/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp" />
              </div>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
              <p style={{ color: "blue" }}>Dennis Green</p>

            </div>
          </div>
        </div>
        <div className="pricing">
          <p>Pricing</p>
          <div className="mainbox">

            <div className="box1" >
              <div className="buildicon">
                <img src="https://img.icons8.com/external-gradients-pause-08/64/000000/external-buildings-urban-element-and-buildings-gradients-pause-08-2.png"/>
              </div>
              <p>Basic Plan</p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
              <div className="dollar">
                $29 <span>per months</span>
              </div>
              <div className="opensource">
                <button>Get Started</button>
                <p style={{ color: "blue", fontSize: "20px" }}>Open Source</p>
              </div>
            </div>
            <div className="box1" >
            <div className="buildicon">
                <img src="https://img.icons8.com/external-gradients-pause-08/64/000000/external-buildings-urban-element-and-buildings-gradients-pause-08-2.png"/>
              </div>
              <p>Basic Plan</p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
              <div className="dollar">
                $29 <span>per months</span>
              </div>
              <div className="opensource">
                <button>Get Started</button>
                <p style={{ color: "blue", fontSize: "20px" }}>Open Source</p>
              </div>
            </div>
            <div className="box1" >
            <div className="buildicon">
                <img src="https://img.icons8.com/external-gradients-pause-08/64/000000/external-buildings-urban-element-and-buildings-gradients-pause-08-2.png"/>
              </div>
              <p>Basic Plan</p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
              <div className="dollar">
                $29 <span>per months</span>
              </div>
              <div className="opensource">
                <button>Get Started</button>
                <p style={{ color: "blue", fontSize: "20px" }}>Open Source</p>
              </div>
            </div>
          </div>
        </div>


        <div className="blog">
          <p>Our Blog</p>
          <div className="mainblog">
            <div className="box2" >
              <div className="pic1">
                <img src="https://preview.colorlib.com/theme/vertex/images/ximage_5.jpg.pagespeed.ic.iKm4ByX0ak.webp" />
              </div>
              <div className="blogcontent">
                <p>june 29 2018 Admin</p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
              </div>
              <div className="read">
                <p style={{ color: "blue", fontSize: "20px" }}>read more</p>
              </div>
            </div>

            <div className="box2" >
              <div className="pic1">
                <img src="https://preview.colorlib.com/theme/vertex/images/ximage_6.jpg.pagespeed.ic.9bp8-gT870.webp" />
              </div>
              <div className="blogcontent">
                <p>june 29 2018 Admin</p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
              </div>
              <div className="read">
                <p style={{ color: "blue", fontSize: "20px" }}>read more</p>
              </div>
            </div>
            <div className="box2" >
              <div className="pic1">
                <img src="https://preview.colorlib.com/theme/vertex/images/ximage_7.jpg.pagespeed.ic.LpuSpxKrZB.webp" />
              </div>
              <div className="blogcontent">
                <p>june 29 2018 Admin</p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
              </div>
              <div className="read">
                <p style={{ color: "blue", fontSize: "20px" }}>read more</p>
              </div>
            </div>
            <div className="box2" >
              <div className="pic1">
                <img src="https://preview.colorlib.com/theme/vertex/images/ximage_8.jpg.pagespeed.ic.7s90HPsA1Q.webp" />
              </div>
              <div className="blogcontent">
                <p>june 29 2018 Admin</p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
              </div>
              <div className="read">
                <p style={{ color: "blue", fontSize: "20px" }}>read more</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
         
          <div className="footer-content">
            <div className="footerpara">
              <h5>Vertex</h5>
              <p>  Far far away behind the word mountains,
                far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="quicklinks">
              <h5>Quick Links</h5>
              <ul>
                <li>About</li>
                <li>Project</li>
                <li>Services</li>
                <li>Blog</li> 
                <li>Contact</li>
              </ul>
            </div>
            <div className="contactinformation">
            <h5>Contact Information</h5>
              <ul>
                <li>Address</li>
                <li>+123456789</li>
                <li>Services@mail.com</li>
                <li>Blog@mail.com</li>
                </ul>
              </div> 
            
            <div className="social">
              <div className="iconsize">
            <AiFillTwitterCircle/>
            </div>
            <div className="iconsize">
            <AiOutlineFacebook/></div>
            <div className="iconsize">
            <AiOutlineInstagram/></div>
            
            </div>

          </div>
          <div className="lastcontent">
            <p>Copyright ©2022 All rights reserved | This template is made with <AiOutlineHeart/> by Colorlib</p>
          </div>

        </div>

      </div>



      {/* </div> */}

    </>
  )
}

export default App;
