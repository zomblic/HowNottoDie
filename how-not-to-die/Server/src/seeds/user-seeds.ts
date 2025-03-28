import User from '../models/user';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'password1' },
  ]);
};

seedUsers().then(() => console.log('Users seeded'));