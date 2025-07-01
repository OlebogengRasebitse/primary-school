function Events() {
    return (
       <>
       <h1 className="text-3xl font-bold mb-4">SCHOOL CALENDER</h1>
       <section className="my-12">
  <div className="w-full aspect-video">
    <iframe 
      src="https://calendar.google.com/calendar/embed?src=your_calendar_url_here"
      className="w-full h-full border-0 rounded-lg shadow"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  </div>
  <hr className="my-8 border-t-2 border-blue-900" />
  <section className="my-12">
 <h1 className="text-3xl font-bold mb-4">UP COMING EVENTS</h1> 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        title: "Grade 7 Farewell Prep",
        date: "June 25, 2025",
        img: "https://d3p3fw3rutb1if.cloudfront.net/photos/5ade5b35-cfba-49ec-b7f0-ae88681ab129",
        desc: "Final preparations and rehearsals for the Grade 7 farewell ceremony."
      },
      {
        title: "Math Olympiad",
        date: "June 27, 2025",
        img: "https://d3p3fw3rutb1if.cloudfront.net/photos/d6ea3d2c-5869-4702-b459-da819edd8508",
        desc: "Our top learners compete in a district-level math competition."
      },
      {
        title: "Winter Reading Week",
        date: "July 1–5, 2025",
        img: "https://d3p3fw3rutb1if.cloudfront.net/photos/e723b9cd-f80f-4b60-88a0-6577b5e31706",
        desc: "A week dedicated to reading and literacy activities across all grades."
      },
      {
        title: "Sports Awards",
        date: "July 10, 2025",
        img: "https://d3p3fw3rutb1if.cloudfront.net/photos/05c398a5-6bd0-455c-9041-c95ea19b0154",
        desc: "Celebrating the achievements of our young athletes."
      }
    ].map((event, i) => (
      <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={event.img} alt={event.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <p className="text-sm text-gray-600">{event.date}</p>
          <p className="text-sm mt-2">{event.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

<section className="my-12">
 <hr className="my-8 border-t-2 border-blue-900" />
 <h1 className="text-3xl font-bold mb-4">PAST EVENTS</h1> 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        title: "School Talent Show",
        date: "May 15, 2025",
        img: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg",
        desc: "A fun-filled day of singing, dancing, and showcasing talents."
      },
      {
        title: "Soccer Tournament",
        date: "April 20, 2025",
        img: "https://images.pexels.com/photos/3886235/pexels-photo-3886235.jpeg",
        desc: "Tsitsing Primary placed 2nd in the regional inter-school tournament."
      },
      {
        title: "Art Exhibition",
        date: "March 10, 2025",
        img: "https://images.pexels.com/photos/2149422/pexels-photo-2149422.jpeg",
        desc: "Learners displayed creative artworks and crafts in the school hall."
      },
      {
        title: "Heritage Day Assembly",
        date: "February 28, 2025",
        img: "https://images.pexels.com/photos/30333011/pexels-photo-30333011.jpeg",
        desc: "Celebrating our cultures through music, dance, and traditional attire."
      }
    ].map((event, i) => (
      <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={event.img} alt={event.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <p className="text-sm text-gray-600">{event.date}</p>
          <p className="text-sm mt-2">{event.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>
</section>

       </>
    );
}

export default Events;