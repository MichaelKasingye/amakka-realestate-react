import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export default function Cookie() {
  const [cookie, setCookie] = useState(false);
  const [popUp, setPopUp] = useState(false);


    function cookieAction(e) {
      e.preventDefault();
      console.log("cookie");
    Cookies.set('siteName', 'Solfix Africa', { expires: 7 })
    setCookie(true);
    window.location.reload();
  }

  function popUpHandle(e) {
    e.preventDefault();

    setPopUp(true);
    // Cookies.set('emptyCookie', 'No cookie', { expires: 2 })
    // setTimeout(()=>{Cookies.remove('emptyCookie')}, 2000);

  //   var date = new Date();
  //  var time = date.setTime(date.getTime());
  //  var expires = "; expires="+date.toGMTString();
  //  console.log(expires);

  // if (Cookies.get('emptyCookie') === !undefined) {
  // console.log(Cookies.get('emptyCookie'));

  //   // setPopUp(false)
  //   console.log(popUp);
  // }else{
  //   console.log(Cookies.get('emptyCookie'));
  //   // console.log(popUp);
  //   console.log("undefined");
  
  //   // setPopUp(true)
  // }
  
  // window.location.reload();
}


  useEffect(() => {
    if (Cookies.get('siteName') === undefined) {
      // console.log(cookie);
      // console.log("undefined");

      setCookie(false)
    }else{
      // console.log(Cookies.get('siteName'));
      // console.log(cookie);
      setCookie(true)
    }

  }, [cookie])

  // console.log(Cookies.get('siteName'));
  return (
    <>
    {cookie || popUp?"":(
    <div id= "cookiePopup" >
  <p>
    Our website uses <strong>cookies</strong> to provide your browsing
    experience and relevant information. 
    {/* Before continuing to use our website,
    you agree &amp; accept of our <a href="/cookiePolicy">Cookie Policy
    </a> */}
  </p>
  <div className='w-100 cookie-buttons'>
  <button id="acceptCookie" onClick={cookieAction}>Accept</button><button id="acceptCookie"
   onClick={popUpHandle}>Decline</button>
  </div>
</div>
    )}
</>
  )
}
