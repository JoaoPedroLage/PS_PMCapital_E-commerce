import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import apiGetAll from '../services/apiGetAll';
import AppContext from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

export default function TicketsPage() {
  const [tickets, setTickets] = useState([]);
  const { cart } = useContext(AppContext);
  const [disableCartBtn, setDisableCartBtn] = useState(true);
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getTickets = async () => {
      try {
        const allTickets = await apiGetAll('tickets');
        setTickets(allTickets);
      } catch (error) {
        console.log(error);
      }
    };
    getTickets();
  }, []);

  useEffect(() => {
    const min = 0.001;
    if (totalCost <= min) {
      setDisableCartBtn(true);
    } else {
      setDisableCartBtn(false);
    }
  }, [totalCost]);

  useEffect(() => {
    function sumPrices() {
      let sum = 0;
      cart.forEach(({ price, quantity }) => {
        sum += (Number(price) * quantity);
      });

      setTotalCost(sum.toFixed(2));
    }
    sumPrices();
  }, [cart]);

  return (
    <div>
      <Header />
      {tickets.map((product) => (
        <ProductCard
          key={ product.id }
          product={ product }
        />
      ))}
      <button
        type="button"
        data-testid="customer_tickets__button-cart"
        disabled={ disableCartBtn }
        onClick={ () => { navigate('/customer/checkout'); } }
      >
        Ver Carrinho: R$
        <span
          data-testid="customer_tickets__checkout-bottom-value"
        >
          { totalCost.toString().replace('.', ',') }
        </span>
      </button>
    </div>
  );
}
