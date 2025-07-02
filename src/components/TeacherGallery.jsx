const teachers = [
  {
    name: "Mr. Moagi",
    title: "School Principal",
    image: "https://plus.unsplash.com/premium_photo-1683140757395-ba8af5aa185f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
    {
    name: "Mrs Molefe",
    title: "Deputy Principal",
    image: "https://images.unsplash.com/photo-1650066703774-82807845e9f1?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mr. Ranta",
    title: "Sports Coordinator",
    image: "https://plus.unsplash.com/premium_photo-1705508815908-5eb0dc050fd4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    name: "Miss Mosito",
    title: "Head of Foundation Phase",
    image: "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
      {
    name: "Mr Phala",
    title: "English & Literacy Teacher",
    image: "https://images.unsplash.com/photo-1739407105867-274e499cb76a?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },  
    {
    name: "Mr Mogorosi",
    title: "Natural Science Teacher",
    image: "https://plus.unsplash.com/premium_photo-1690579805323-ce7193c0755d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
      {
    name: "Mrs Makute",
    title: "Life Skills Teacher",
    image: "https://plus.unsplash.com/premium_photo-1726776021297-4177d0e96af0?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
      {
    name: "Mrs Booysens",
    title: "School Clerk",
    image: "https://images.unsplash.com/photo-1705429463051-94833aac5a67?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
 
];

function TeacherGallery() {
  return (
    <section className="py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {teachers.map((teacher, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 text-center">
            <img
              src={teacher.image}
              alt={teacher.name}
              className="overflow-hidden w-48 h-48 mx-auto rounded-full mb-4 border-4 border-blue-900 transform transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-lg font-semibold">{teacher.name}</h3>
            <p className="text-sm text-gray-600">{teacher.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeacherGallery;