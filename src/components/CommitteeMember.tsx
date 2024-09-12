import React from 'react';

interface MemberProps {
  name: string;
  title: string;
  role: string | null;
  imageUrl: string;
}

const CommitteeMember: React.FC<MemberProps> = ({ name, title, role='NO_ROLE', imageUrl }) => {
  return (
    <div className="grid grid-rows-[auto_auto_auto] justify-items-center bg-white shadow-md rounded-lg p-4 w-60 h-auto">
      <img
        src={imageUrl}
        alt={name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold text-center">{name}</h3>
      <p className="text-sm text-gray-600 text-center">{title}</p>
      {role!=='NO_ROLE' &&
      (<p className="text-sm text-gray-600 italic text-center">{role}</p>)
      }
      
    </div>
  );
};

export default CommitteeMember;
