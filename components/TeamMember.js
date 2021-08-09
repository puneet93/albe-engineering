import Image from 'next/image'

function TeamMember() {
    return (
      <div className="team-member">
        <Image src="/team-image.png" className="img-fluid" width="255" height="255" alt="team" />
        <h6 className="text-normal mb-0">John Doe</h6>
        <p>Engineer</p>
      </div>
    );
  }

  export default TeamMember;