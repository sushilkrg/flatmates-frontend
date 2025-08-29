import ListingCard from './ListingCard';

const Listings = ({ listings }) => {

  if (listings?.length === 0) {
    return (
      <div className='text-center mt-16'>
        <h3>No data available.</h3>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">
      {listings?.map((listing) => <ListingCard key={listing._id} listing={listing} />)}
    </div>
  )
}

export default Listings