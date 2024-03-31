import './App.css';

import './Tooltip.js';
import Tooltip from './Tooltip.js';

// Main Function
function App() {
  return (
    <div>
      <div class="tooltip-box">
        {/* Tooltip component with default position is top */}
      <Tooltip position="top" />
      </div>
    </div>
    
  );
}

export default App;
