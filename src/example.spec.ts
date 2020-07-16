class FriendsList {
  friends: string[] = [];

  addFriends = (name: string): void => {
    this.friends.push(name);
    this.announceFriend(name);
  };

  announceFriend = (name: string): void =>
    console.log(`${name} is now a friend!`);

  removeFriend = (name: string) => {
    const idx = this.friends.indexOf(name);

    if (idx === -1) throw new Error('Friend not found!');

    this.friends.splice(idx, 1);
  };
}

describe('My Test Example', () => {
  it('returns true', () => {
    expect(true).toEqual(true);
  });
});

describe('FriendsList', () => {
  let friendsList: FriendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });

  it('initializes friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('add a friends to the list', () => {
    friendsList.addFriends('Leandro');
    expect(friendsList.friends.length).toEqual(1);
  });

  it('announce friendship', () => {
    friendsList.announceFriend = jest.fn();
    expect(friendsList.announceFriend).not.toHaveBeenCalled();
    friendsList.addFriends('Leandro');
    expect(friendsList.announceFriend).toHaveBeenCalledWith('Leandro');
  });
});

describe('removeFriend', () => {
  let friendsList: FriendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });

  it('removes a friend from the list', () => {
    friendsList.addFriends('Ariel');
    expect(friendsList.friends[0]).toEqual('Ariel');

    friendsList.removeFriend('Ariel');
    expect(friendsList.friends[0]).toBeUndefined();
  });

  it('throw an error as friend does not exist', () => {
    expect(() => friendsList.removeFriend('Ariel')).toThrow(
      new Error('Friend not found!')
    );
  });
});
