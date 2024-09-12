import React from 'react';
import CommitteeMember from '../components/CommitteeMember';
import members from '../content/advisoryCommittee.json';

const AdvisoryCommittee: React.FC = () => {
  return (
    <>
      <div className="container mx-auto py-8 px-4 lg:px-32">
        <h1 className="text-3xl font-bold text-center mb-8">Advisory Committee</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <CommitteeMember
                    key={index}
                    name={member.name}
                    title={member.title}
                    imageUrl={member.imageUrl} 
                    role={null}              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvisoryCommittee;
