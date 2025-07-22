import ImageCarousel from "../components/ImageCarousel";

function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-blue-900">WHATS HAPPENING AT TSITSING PRIMARY</h1>
      <h2 className="text-xl font-semibold mt-4 mb-2">Mid-Year Exams</h2>

      <p className="text-base leading-relaxed">
        Mid-year assessments are currently underway. We encourage all learners to revise daily,
        manage their time wisely, and get enough rest.
        <br /><br />
      <a href="/exam-timetable.pdf" target="_blank">View the Exam Timetable</a><br />
<a href="/revision-paper.pdf" target="_blank">Download Revision Paper</a>
        <br /><br />
        Good luck to all our students. We believe in you!
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Winter Holiday Camp 2025</h2>
      <p className="text-base leading-relaxed">29 May – 01 June 2025
        <br />
        08:00 AM – 13:00 PM
        <br /><br />
        Our annual Winter Camp for Grade 7 learners is coming up soon! This exciting 4-day program includes team-building activities, science experiments, creative arts, and leadership workshops all designed to prepare our seniors for the next chapter.
        Don’t miss out on the fun and learning! Permission letters will be sent home this week.</p>

      <hr className="my-8 border-t-2 border-blue-900" />
      <h1 className="text-3xl font-bold mb-4 text-blue-900">LEARNER SPOTLIGHT</h1>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <img
          src="/Soccer-Team.jpeg"
          alt="Soccer Team Image"
          className="w-full h-auto rounded-lg shadow-md"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-2">Tsitsing Primary Shines at Royal Bafokeng Soccer Tournament</h2>
          <p className="text-base leading-relaxed">
            Tsitsing Primary School is beaming with pride as our Under 11 Soccer Team brought home bronze medals from the prestigious Royal Bafokeng Soccer Tournament. The team showcased incredible talent, determination, and teamwork throughout the competition, making the entire school community proud.

            A special highlight goes to Tselapedi Onkarabile, who was awarded Best Midfielder of the Tournament a remarkable achievement that speaks to his skill and passion for the game.
            <br /><br />
            This victory is not just a celebration of medals, but a reflection of hard work, discipline, and the bright future ahead for our young stars. Well done, team Tsitsing!

            #TsitsingPrimary #Under11Soccer #BronzeMedalWinners #ProudMoment #FutureStars
          </p>
        </div>
      </section>
      <hr className="my-8 border-t-2 border-blue-900" />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">TSITSING PRIMARY TALENT HIGHLIGHT</h1>
        <br />
        <ImageCarousel />
      </div>
    </>
  );
}

export default Home