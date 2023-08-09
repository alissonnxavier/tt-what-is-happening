interface UserHeroProps {
    userId: string;
}

import React from 'react'

const UserHero: React.FC<UserHeroProps> = () => {
  return (
    <div>UserHero</div>
  )
}

export default UserHero