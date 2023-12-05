import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  return (
    <div>
      <div class="container mt-3">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body" >
                <p class="card-title" style={{ color: 'green', fontWeight: 'bold' }}>
                  Total Orders
                </p>
                <Link to="/total-orders">
                <button className="btn d-flex align-items-center">
                  <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'orange', fontSize: '30px' }} />
                  </button>
                </Link>
                <h5 class="card-title"style={{color:'#7952b3'}}>4982</h5>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body" >
                <p class="card-title" style={{ color: 'green', fontWeight: 'bold' }}>
                Total Customers
                </p>
                <Link to="/total-customers">
                <button className="btn d-flex align-items-center">
                    <FontAwesomeIcon icon={faPeopleRoof} style={{ color: 'orange', fontSize: '30px' }} />
                  </button>
                </Link>
                <h5 class="card-title" style={{color:'#7952b3'}}>12700</h5>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body" styl>
                <p class="card-title" style={{ color: 'green', fontWeight: 'bold' }}>
              Total Categories
                </p>
                <Link to="/total-categories">
                  <button className="btn d-flex align-items-center">
                  <FontAwesomeIcon icon={faTags} style={{ color: 'orange', fontSize: '30px' }} />
                  </button>
                </Link>
                <h5 class="card-title"style={{color:'#7952b3'}}>689</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body" style={{ }}>
                <p class="card-title" style={{ color: 'green', fontWeight: 'bold' }}>
               Total Revenue
                </p>
                <Link to="/total-revenue">
                  <button className="btn d-flex align-items-center">
                    <FontAwesomeIcon icon={faDollarSign} style={{ color: 'orange', fontSize: '30px' }} />
                  </button>
                </Link>
                <h5 class="card-title"style={{color:'#7952b3'}}>$56,300</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;