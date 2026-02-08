export default function SeparationOfPowersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0F2C47] via-[#1A3A5C] to-[#C41E3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Separation of Powers
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Legislative, executive, and judicial roles in practice.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Overview</h2>
          <p>
            The U.S. Constitution divides the federal government into three branches to prevent 
            any single entity from holding too much power:
          </p>

          <h3>Legislative Branch (Congress)</h3>
          <p>
            Congress makes the laws. It consists of the House of Representatives and the Senate.
          </p>
          <ul>
            <li><strong>Powers:</strong> Pass laws, approve budgets, declare war, impeach officials</li>
            <li><strong>Checks:</strong> Can override presidential vetoes, approve judicial nominees, investigate executive actions</li>
          </ul>

          <h3>Executive Branch (President)</h3>
          <p>
            The President enforces the laws and manages the federal government.
          </p>
          <ul>
            <li><strong>Powers:</strong> Veto legislation, appoint judges, command military, negotiate treaties</li>
            <li><strong>Checks:</strong> Can veto bills, grant pardons, issue executive orders</li>
          </ul>

          <h3>Judicial Branch (Courts)</h3>
          <p>
            The courts interpret the laws and determine their constitutionality.
          </p>
          <ul>
            <li><strong>Powers:</strong> Judicial review, interpret laws, settle disputes between states</li>
            <li><strong>Checks:</strong> Can declare laws or executive actions unconstitutional</li>
          </ul>

          <h2>Checks and Balances</h2>
          <p>
            Each branch has specific ways to limit the power of the others:
          </p>
          <ul>
            <li>Congress can impeach and remove the President or judges</li>
            <li>The President can veto legislation and appoint judges</li>
            <li>Courts can strike down unconstitutional laws or executive actions</li>
            <li>Senate must approve presidential appointments and treaties</li>
            <li>Congress controls the budget for all branches</li>
          </ul>

          <h2>In Practice</h2>
          <p>
            While the Constitution establishes clear separations, the boundaries between branches 
            have evolved over time through practice, custom, and court decisions. Modern governance 
            often involves complex interactions between all three branches.
          </p>
        </div>
      </div>
    </div>
  );
}
