import {
    Box,
    FormControl,
    MenuItem,
    Paper,
    Select,
    Typography,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { PageState, setPageNumber } from "../redux/reducer";
  import SingleCard from "../component/SingleCard";
import Loader from "../component/Loader";
  
  const Shopping = () => {
    const [selectedPage, SetSelectedPage] = useState(5);
  
    const { pageNumber } = useSelector((state: { page: PageState }) => state.page);
  
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
  
    const dispatch = useDispatch();
  
    const totalPages = Math.ceil(products.length / pageNumber);
  
    const currentItems = products.slice(
      (currentPage - 1) * pageNumber,
      currentPage * pageNumber
    );
  
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const data = await fetch("https://fakestoreapi.com/products");
          const allProducts = await data.json();
          setProducts(allProducts);
          setLoading(false);
        } catch (error) {
          console.log("error:", error);
          setLoading(false);
        }
      };
      fetchData();
    }, [pageNumber]);
  
    //---------------------- Handle page size change--------------
    const handlePageSizeChange = (event: any) => {
      const selectedValue = Number(event.target.value); 
      SetSelectedPage(selectedValue);
      dispatch(setPageNumber(selectedValue)); 
    };
  
if(loading) return <Loader></Loader>

    return (
      <>
        <div
          style={{
            width: "100vw",
            display: "flex",
            padding: " 0rem 6rem",
            marginTop: "5rem",
          }}
        >
          {/* ----------------------------------- filters------------------------- */}
          <div
            style={{
              width: "20%",
              height: "95vh",
            }}
          >
            <Box
              sx={{
                padding: "1rem 2rem",
                height: "100%",
              }}
            >
              <Paper
                elevation={2}
                sx={{
                  padding: "1rem 1rem",
                  mt: 6,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "gray",
                  }}
                >
                  {" "}
                  select items per page
                </Typography>
  
                {/* ------------------------------------ selection box--------------------------------------- */}
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <Select
                      value={selectedPage}
                      onChange={handlePageSizeChange} //---------------- Update the state and Redux store
                    >
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={15}>15</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Paper>
            </Box>
          </div>
  
          {/* ------------------------------------------- Card Item-------------------------------  */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              height: "80vh",
            }}
          >
            <div
              style={{
                display: "grid",
                height: "auto",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: " 16px",
              }}
            >
              {currentItems.map((ele, idx) => (
                <SingleCard key={idx} cardDetails={ele} />
              ))}
            </div>
          </div>
  
          {/* -----------------pagination ---------------------- */}
        </div>
  
        <div
          style={{ display: "flex", justifyContent: "center", height: "2rem" }}
        >
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                style={{
                  margin: "0 5px",
                  padding: "10px 15px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor:
                    currentPage === pageNumber ? "#007bff" : "#f8f9fa",
                  color: currentPage === pageNumber ? "#fff" : "#000",
                  cursor: "pointer",
                }}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
      </>
    );
  };
  
  export default Shopping;
  