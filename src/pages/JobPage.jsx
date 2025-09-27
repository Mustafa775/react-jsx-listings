


import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import JobDetails from '../components/JobDetails';

const JobPage = ({deleteJob}) => {
    const {id}  = useParams();

    
// we are fetching data using data loaders using the react-router library 
// the commented method is using the useEffect method that is from react package, like we did in the JobListings page




    // const [job, setJob] = useState(null);
    // const [loading , setLoading] = useState(true);

    // useEffect( ()=> {
    //     const fetchJob = async ()=>{
    //         try {
    //             const res = await fetch(`/api/jobs/${id}`);
    //             const data = await res.json();
    //             setJob(data);
    //         } catch (error) {
    //             console.log("ERROR occured while fetching: ", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchJob();
    // } , [])
    const job = useLoaderData();
  return (
    <JobDetails job={job} deleteJob={deleteJob} />
)
};

const jobLoader = async ({params})=>{
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export {JobPage as default , jobLoader}; 