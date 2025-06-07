const Footer: React.FC = () => {

    return (
        <footer className="text-center text-lg-start mt-5">
            <div className="text-center p-3">
                © {new Date().getFullYear()} Jay Mason
            </div>
        </footer>
    );
};

export default Footer;