const UsersFeedback = () => {
  return (
    <div>
      <h1>Users Feedback</h1>
      <p>This is the users feedback page.</p>
    </div>
  )
}
export default UsersFeedback

export const getConfig = async () => {
  return {
    render: 'static',
  } as const
}
