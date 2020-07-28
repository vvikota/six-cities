const commentsDataConversion = (rawCommentsData) =>
  rawCommentsData.map((comment) => ({
    id: comment.id || 0,
    user: {
      id: comment.user.id || 0,
      isPro: comment.user.is_pro || false,
      name: comment.user.name || `string`,
      avatarUrl: comment.user.avatar_url || `string`,
    },
    rating: comment.rating || 0,
    comment: comment.comment || `string`,
    date: comment.date || `string`
  }));

export default commentsDataConversion;

