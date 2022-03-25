import { useMemo } from "react";

export const useSortFriends = (friends, sort) => {
  const sortedFriends = useMemo(() => {
    if (sort) {
      return [...friends].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else return friends;
  }, [sort, friends]);

  return sortedFriends;
};

export const useFriends = (friends, sort, search) => {
  const sortedFriends = useSortFriends(friends, sort);
  const sortedAndSearchedFriends = useMemo(() => {
    return sortedFriends.filter((friend) =>
      friend.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search, sortedFriends]);

  return sortedAndSearchedFriends;
};
