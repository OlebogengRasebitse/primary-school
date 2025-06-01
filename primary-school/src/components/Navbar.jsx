import React from 'react';

function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white h-10 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center h-full px-4">
          <div className="flex items-center space-x-3">
            <img
              className="h-6 w-6 object-contain"
              src="https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t39.30808-6/482057494_3673300822961008_3809006349011660791_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=zvMx5DZziXkQ7kNvwHdTWck&_nc_oc=Adlemai0w2HgWD9mDbUZuD0EjEv2RYfOfUjf9xbBEl1re12rbcKJtZKJM4RC1dHf4Vw&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=i7v2zf74meXikjgYYZVbBg&oh=00_AfKw_wuRcNYajVoNS_g4W1ZPkeKwqO5AJ_cfD1RdJ6jySQ&oe=682C7D33"
              alt="nature image"
            />
            <span className="font-semibold text-gray-800 text-lg">Tsitsing Primary School</span>
          </div>
          <nav
            className="fixed top-10 left-0 right-0 h-12 z-40"
            style={{
              backgroundImage: 'url("/path-to-your-hero-image.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="container mx-auto h-full flex items-center px-4">
              <ul className="flex space-x-8 text-white font-semibold text-sm">
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#announcements" className="hover:underline">Announcements</a></li>
                <li><a href="#forms" className="hover:underline">Forms & Documents</a></li>
                <li><a href="#events" className="hover:underline">Events Calendar</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
          </nav>
          {/* Right side: telephone number */}
          <div className="text-gray-800 font-medium text-sm">
            📞 011 123 4567
          </div>
        </div>
      </div>
      {/* Padding so content is below fixed bar */}
      <div className="pt-10">
      </div>
    </>
  );
}


export default Navbar;
