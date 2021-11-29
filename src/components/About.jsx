import React,{useEffect, useRef} from 'react';
import Navbar from './Navbar';
import { useIntersection } from 'react-use'
import gsap from 'gsap';
export default function About(){
    const tl = gsap.timeline();
    useEffect(() => {
       tl.from('.ddd',{x:65,opacity:0,delay:0.2})
    }, [])

    // Ref for our element
    const sectionRef = useRef(null);
    // All the ref to be observed
    const intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: "0px",
      threshold: .4
    });
  
    // Animation for fading in
    const fadeIn = element => {
      gsap.to(element, 1, {
        opacity: 1,
        y: 10,
        scale:1.1,
     ease: "power4.out",
        stagger: {
          amount: 0.3
        }
      });
    };
    // Animation for fading out
    const fadeOut = element => {
      gsap.to(element, 1, {
        opacity: 1,
        scale:.98,
        y:-20,
        ease: "power4.out"
      });
    };
  
    // checking to see when the vieport is visible to the user
    intersection && intersection.intersectionRatio < .4
      ? fadeOut(".fadeIn")
      : fadeIn(".fadeIn");

    
    return (
        <React.Fragment>

        
        <div className="container" ref={sectionRef}>
        <h1 className="ddd fadeIn">About</h1>
        <Navbar/>
        <p>
Հայերեն Shqip ‫العربية Български Català 中文简体 Hrvatski Česky Dansk Nederlands English Eesti Filipino Suomi Français ქართული Deutsch Ελληνικά ‫עברית हिन्दी Magyar Indonesia Italiano Latviski Lietuviškai македонски Melayu Norsk Polski Português Româna Pyccкий Српски Slovenčina Slovenščina Español Svenska ไทย Türkçe Українська Tiếng Việt
Lorem Ipsum
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a dui et leo facilisis euismod a at felis. Praesent dolor magna, lobortis et suscipit a, pharetra a lectus. Mauris non lorem ut neque condimentum ornare nec ac ante. Aenean a risus tempus, semper sem nec, elementum augue. Vestibulum sollicitudin, velit ut scelerisque tristique, nulla est ornare nulla, ut elementum ligula libero vel sem. Nulla maximus, quam ut pretium pulvinar, massa metus convallis dui, nec ullamcorper ipsum augue sit amet urna. Cras consequat neque velit, at semper ipsum malesuada ut.

Nunc eleifend aliquet nisi, id tincidunt arcu pretium ut. Vivamus eget augue hendrerit, placerat mauris vitae, posuere urna. Morbi semper arcu nec felis porta molestie. Duis in laoreet tortor, eu mattis arcu. Nulla iaculis rutrum nulla euismod tempor. In iaculis est orci, eu rhoncus ex dictum et. Nam suscipit hendrerit tellus, vitae tempor enim consectetur ac. Nulla congue elementum ultrices. Mauris sodales semper tristique. Morbi condimentum ultricies ipsum, sit amet iaculis odio ullamcorper at.

Mauris vulputate enim libero, faucibus convallis metus tincidunt convallis. Fusce a elementum urna. Cras quis lacus venenatis, iaculis mauris sit amet, aliquam risus. In hac habitasse platea dictumst. Vivamus cursus massa at dolor faucibus accumsan. Duis tempor eros sed tortor auctor, nec ullamcorper ante sollicitudin. In a turpis lobortis, ullamcorper ex non, imperdiet nisl. Curabitur sem lacus, tristique eget ligula non, eleifend porta augue.

Aliquam vitae lectus vestibulum, placerat est vel, condimentum ipsum. Nulla ac justo mauris. Pellentesque sodales nec nulla ut luctus. Pellentesque velit nibh, maximus a venenatis nec, fermentum non urna. Fusce iaculis eros facilisis lorem ornare, id blandit diam scelerisque. Etiam volutpat massa non lorem efficitur, eu venenatis enim pellentesque. Aliquam consectetur quis lorem at eleifend. Aliquam porttitor magna vel lorem porttitor, at faucibus ipsum venenatis. Aliquam erat volutpat. Sed lacinia massa ac hendrerit condimentum.

Proin vel sapien libero. Donec in neque luctus, efficitur augue nec, aliquam tortor. Integer quis ante suscipit, laoreet urna eu, varius nisi. Etiam venenatis tempor ornare. Suspendisse id vehicula libero. Maecenas non tincidunt nisl. Donec ullamcorper ullamcorper augue. Maecenas non semper quam. Proin non enim vel libero varius sodales. Etiam viverra lorem at augue pretium, ac dignissim lorem tristique. Ut in libero ac massa egestas rhoncus.

Generated 5 paragraphs, 367 words, 2503 bytes of Lorem Ipsum
help@lipsum.com
Privacy Policy
</p>
            
        </div>
        </React.Fragment>
    )
}
