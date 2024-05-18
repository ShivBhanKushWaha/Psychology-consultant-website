

export const metadata = {
    title: "Psychologist Admin",
    description: "Psychologist Admin Dashboard",
};
  
  const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div>
        {children}
      </div>
    );
  };
  
  export default AdminLayout;