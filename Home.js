// index.html:
// title name > written
// theme color choice from daisyui > copy paste in top of 2 no line.
//     App.js:
// ftailwindcss:
// max - w - [1440px] > max - width(for website design how much space gap in both side)
// mx - auto=horizontal centre(To center a container)
// navbar.js:
// above return:: -
// const menuItems = <React.Fragment>
//     link copy paste
// </React.Fragment>
// after return:
// 1st div > flex justify - between(for home page adjust)
//     <a>--ctrl+alt+down arrow=multicursor>shift+right arrow>Link auto import>to=”/”>end press>left arrow until  a first>shift+right arrow>Link t0=”/” write>Daisyui places<Link to=”/” write>
//         Home.js:-
//         tailwindcss:
// mx-5>margin (for padding ,04 er gunitok i.e,20 px)
//         Banner.js:-
// c-dribe >projects>src> assets folder copy paste from git clone file
//         daisyui :-
// hero>card choice
// connect>in div of Home.js
//         delete min-h-screen from 1st div for image small
// button color different solution>as per given design
// daisyui>theme generator>copy,paste in tailwind.config.js files after contents
//         delete bg-base-200 from 1st div
//         delete max-w-sm from img
// import chair image>{chair}>w-½
// button for linear gradient>tailwindcss>linear gradient>copy paste >text-white
//         InfoCards.js:-
// connect>in div of Home.js
//         InfoCard.js:-
//         daisyui :-
// hero>card choice
//         InfoCards.js:-
//         Before return:
//         const cardData=[{id:1,name:””,description:””,icon:clock,bgClass:”bg-primary”>copy paste
//         After return:
// in div>{cardData.map(card => InfoCard > <InfoCard
//             key={card.id}
//             card={card}
//         ></InfoCard>)}
//         InfoCard.js:-
// Destructuring>1st line>({card})
//         const {{, name:,description:,icon:,bgClass:}=card;
// for layout>parent>Infocards.js>child>After return div>for responsive>grid-cols-1 md:grid-cols-2 lg:grid-cols-3
//         tailwindcss:
//         gap-6(for gap -24 px) in parent div
// bgClass setting>InfoCard>1st div>delete bg-base-100>for full card dynamic>copy by ctrl+x>delete ””>{ }>template string >paste>{`ctrl+v`}>............{`ctrl+v${bgClass}`}<for all side padding p-6 for 24px  text-white in template string of bgClass
// for gap between banner with infocards>parents>mt-8
// for gradiant color>parents>bgClass:bg-gradiant-to-r from-primary to-secondary
//         InfoCards.js:-
// connect>in div of Home.js
//         Services.js:-
// connect>in div of Home.js
// rsc div>mt-16
// 02 parts seen in design>02 div create
// 1st div.. text-center><h3..text-3xl (tailwind-Font-size text-primary uppercase font-bold…..><h2…text-3xl.
// 2nd div>import icom in top>
//         Before return:
//         Before return:
//         const servicesData=[{id:1,name:””,description:””,img:fluoride,description:””>copy paste
//         After return:
// in div>{servicesData.map(card => <Service
//             key={service.id}
//             service={service}
//         ></Service>)}
//         Service.js:
//         destructuring({service})
//         ……..same as above infocard.js
//         MakeAppointment.js:
// connect>in div of Home.js
//         Daisyui(Hero):
// in img>   -mt-32

//         PrimaryButton.js:-
//         Button collect from Bannner.js by ctrl+x to PrimaryButton.js in replacement of div
//         & in Banner.js set <PrimaryButton link by auto by children destructuring in PrimaryButton.js

//         Testimonial.js:
// 02 parts seen in design>02 div create
// connect>in div of Home.js
// 1st div flex justify-between>h4>h3>img import with figure w-48
// 2nd div >data make before return as per before>const reviews=[{id, name, review, img, location……
//         After return:
// in div>{TestimonialsData.map(review => <Review
//             key={review._id}
//             review={review}
//         ></Service>)}
//         Service.js:
//         destructuring({review})
//         const {review:userReview..}=review;
//         card collection from daisyui
//         avatar collection daisyui
//         css: flex itms-center mr-6 w-16 mt-6
//         ……..same as above infocard.js
//         footer.js:
// daisyui>footer>choice
//         css:text-center mt-16
//         bacground image:-
//         <footer
//             style={{
//                 background: `url{${footer})`
// backgroundSize:'cover'}}
