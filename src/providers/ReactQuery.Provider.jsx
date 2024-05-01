import { QueryClient, QueryClientProvider } from "react-query";

// Create a new query client instance
const queryClient = new QueryClient();

const ReactQueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
