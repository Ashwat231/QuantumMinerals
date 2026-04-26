export function Footer() {
    return(
    /* Footer */
    <footer className="bg-gray-900 text-white px-6 py-12">
    <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
        <div>
            <h3 className="font-semibold mb-4">QiMinerals</h3>
            <p className="text-gray-400 text-sm">
            Revolutionizing mineral processing with quantum technology.
            </p>
        </div>
        <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-white">Quantum Processing</a></li>
            <li><a href="/" className="hover:text-white">Analytics Platform</a></li>
            <li><a href="/" className="hover:text-white">Consulting</a></li>
            </ul>
        </div>
        <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/" className="hover:text-white">Careers</a></li>
            <li><a href="/" className="hover:text-white">News</a></li>
            </ul>
        </div>
        <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
            <li>support@qiminerals.com</li>
            <li>+1 111-111-1111</li>
            <li>123 Street, United States</li>
            </ul>
        </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2026 QiMinerals. All rights reserved.</p>
        </div>
    </div>
    </footer>
    )
};