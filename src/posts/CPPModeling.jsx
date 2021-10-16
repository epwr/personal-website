

import { ReactComponent as LifeExpectancySVG } from './assets/cpp-modeling-life-expectancy.svg'


const maxTotal = 250000;
function getY2(startAge, defaultMonthlyAmount) {
  if (startAge > 65) {
    var annualAmount = ((startAge - 65) * 0.084 + 1) * defaultMonthlyAmount * 12;
  } else {
    annualAmount = (1 - (65 - startAge) * 0.072) * defaultMonthlyAmount * 12;
  }
  return 100 - (100 * ((92.5 - startAge) * annualAmount) / maxTotal);
}

function CPPModeling() {
    return (
        <div className="section flex-col">
          <p>Recently, I was asked to run some numbers about when someone should take their Canadian Pension Plan (CPP) retirement benefits. Now, this person
          has the luxury of not needing the benefit to pay the bills, so they wanted to try to maximize the total amount that the benefit would pay them over
          the rest of their life.</p>

          <p>I started to help them by looking at the tools that the Canadian Government provides to help Canadians make the decision of when to begin taking
          their CPP Retirement benefit and, frankly, was disappointed in them. They are difficult to use for someone familiar with both computers and the relevant
          math, so I can't imagine that your average Canadian senior can make much sense of the tools. So here's my attempt at putting together the relevant information,
          and some user-friendly tools.</p>

          <p>I've split this page into X parts. TODO</p>

          <p className="title-2" id="modeling-pension-income">Modeling Pension Income</p>

          <p>
            To start, we need to understand how the CPP Retirement Benefit works. You can find out the details <a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/cpp-benefit/when-start.html">
            here</a>, but in brief there are three variables that determine the amount you will receive:</p>
            <ul>
              <li><b>The amount you paid into the CPP over your life:</b> TODO TODO -- years of no earnings before you take CPP negatively impact your average.
              Each month, while working, you pay into the CPP. You pay a percent of your income up to a certain amount (in 2019 this amount was $57,400). This amount is the average between
              This amount determines the default monthly payout from the CPP Retirement benefit. This default amount is then modified depending on
              when you begin to take the benefit (see the next bullet point) to calculate the actual amount you will receive. Because this amoutn changes for each person, and doesn't affect when you should
              start taking the benefit, I've used the average amount for new beneficiaries as of June 2021 ($714.21 per month) throughout this post.</li>
              <li><b>The age you begin to take the benefit:</b> This modifies the default monthly payout to calculate the exact amount you will receive. At age 60, this is 64%, so if your default monthly payout
              was $714.21, this means you would only get $457.09 each month. However, if you wait until the age of 70, you get 142% of the default amount, which would be $1014.18.</li>
              <li><b>How long you live:</b> The CPP Retirement benefits pays you each month for the rest of your life, so how long you live will affect the total amount you receive. If you are married, and you pass
              away before your spouse (assuming you pass away after the age of 65), your spouse will receive 60% of your montly CPP benefit. This is called the <a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/cpp-survivor-pension.html">
              Survivor's Benefit</a>. See the section on Modeling Life Expentancy to see how I modeled this.</li>
            </ul>

          <p>
            With this understanding, let's graph how much you will receive depending on when you begin to take the benefit. TODO => Figure out how to explain this graph.
          </p>

          <svg viewBox="-22 0 222 120">

            <line x1="0"  y1="100" x2="195" y2={getY2(60, 714.21)} style={{stroke: 'var(--accent)', strokeWidth:'0.3'}} />
            <line x1="6"  y1="100" x2="195" y2={getY2(61, 714.21)} style={{stroke: 'var(--accent)', strokeWidth:'0.3'}} />
            <line x1="12" y1="100" x2="195" y2={getY2(62, 714.21)} style={{stroke: 'var(--accent)', strokeWidth:'0.3'}} />
            <line x1="18" y1="100" x2="195" y2={getY2(63, 714.21)} style={{stroke: 'var(--accent)', strokeWidth:'0.3'}} />
            <line x1="24" y1="100" x2="195" y2={getY2(64, 714.21)} style={{stroke: 'var(--accent)', strokeWidth:'0.3'}} />
            <line x1="30" y1="100" x2="195" y2={getY2(65, 714.21)} style={{stroke: 'var(--accent)', strokeWidth:'0.3'}} />
            <line x1="36" y1="100" x2="195" y2={getY2(66, 714.21)} style={{stroke: 'var(--accent)', strokeWidth:'0.3'}} />
            <line x1="42" y1="100" x2="195" y2={getY2(67, 714.21)} style={{stroke: 'var(--accent)', strokeWidth:'0.3'}} />
            <line x1="48" y1="100" x2="195" y2={getY2(68, 714.21)} style={{stroke: 'var(--accent)', strokeWidth:'0.3'}} />
            <line x1="54" y1="100" x2="195" y2={getY2(69, 714.21)} style={{stroke: 'var(--accent)', strokeWidth:'0.3'}} />
            <line x1="60" y1="100" x2="195" y2={getY2(70, 714.21)} style={{stroke: 'var(--accent)', strokeWidth:'0.3'}} />

            <line x1="0" y1="100" x2="0" y2="0" style={{stroke: 'black', strokeWidth:'0.2'}} />
            <line x1="200" y1="100" x2="0" y2="100" style={{stroke: 'black', strokeWidth:'0.2'}} />

            <text transform="translate(-17, 90) rotate(-90)" fontSize="5" >Total Amount Received from CPP ($)</text>
            <text fontSize="3" x="-13" y="3">250,000</text>
            <text fontSize="3" x="-13" y="20">200,000</text>
            <text fontSize="3" x="-13" y="40">150,000</text>
            <text fontSize="3" x="-13" y="60">100,000</text>
            <text fontSize="3" x="-12" y="80">50,000</text>
            <text fontSize="3" x="-4" y="100">0</text>

            <text fontSize="5" x="90"  y="115"          >Age</text>
            <text fontSize="3" y="105" x="-2" >60</text>
            <text fontSize="3" y="105" x="28" >65</text>
            <text fontSize="3" y="105" x="58" >70</text>
            <text fontSize="3" y="105" x="88" >75</text>
            <text fontSize="3" y="105" x="118">80</text>
            <text fontSize="3" y="105" x="148">85</text>
            <text fontSize="3" y="105" x="178">90</text>
          </svg>

          <p> This graph shows that taking CPP at a given time is not distinctly superior to any other. Instead, it depends on how long you live.
          Let's put this into a table:
          </p>

          <table className="padded-bottom-medium">
            <thead>
              <tr>
              <th>Age Range</th>
              <th>Best Age to Start</th>
              </tr>
            </thead>
            <tbody>
            <tr>     <td>60-69</td>    <td>60</td>      </tr>
            <tr>     <td>70-71</td>    <td>61</td>      </tr>
            <tr>     <td>72-73</td>    <td>62</td>      </tr>
            <tr>     <td>74-75</td>    <td>63</td>      </tr>
            <tr>     <td>76-77</td>    <td>64</td>      </tr>
            <tr>     <td>78-79</td>    <td>66</td>      </tr>
            <tr>     <td>80-81</td>    <td>67</td>      </tr>
            <tr>     <td>82-83</td>    <td>68</td>      </tr>
            <tr>     <td>84-85</td>    <td>69</td>      </tr>
            <tr>     <td> 86+ </td>    <td>70</td>      </tr>
            </tbody>
          </table>

          <p className="title-2" id="modeling-life-expectancy">Modeling Life Expectancy</p>

          <p>Now that we have an idea of potential income from the CPP Retirement Benefit, let's try to get a sense for life expectancy.</p>

          <p>For Canadians, Stats Canada is the place to go: so let's use their <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310011401">life tables</a>.
             We can use these to show the likelihood of dying at a particular age, given you make it to 60. This looks like:
          </p>

          < LifeExpectancySVG className="padded-bottom-medium"/>

          <p className="title-2" id="choosing-the-time">Choosing the Best Time (for You)</p>

          <p>Using these two pieces, we can figure out when the best time to begin taking the CPP retirement benefit. Doing this is a reasonably straight-forward optimization problem.</p>

          <p>The intuition for how to maximize this value is that we can calculate a 'predicted value' of taking the CPP retirement benefit at any given age, and then pick the one that returns the most.
          The predicted value is calculated by summing the income that you would receive for dying at any age (60 to 110) and multiply it by the probability that you would die that age.
          </p>

          <p>If you are a man, at the age of 60 and in 'average health' (TODO => rework after relistening to ep 175), then you should wait until 68 to begin taking the CPP benefit.</p>

          <p>If you are a woman, at the age of 60 and in 'average health' (TODO => rework after relistening to ep 175), then you should wait until 69 to begin taking the CPP benefit.</p>

          <p className="title-2" id="choosing-the-time-2">Choosing the Best Time (for Your Spouse)</p>

          <p>TODO => if anything, this should delay the decision to take the benefit.</p>

          <p className="title-2" id="sources">Sources</p>
          <ul>
            <li>Life expectancy and other elements of the life table, Canada, all provinces except Prince Edward Island. </li>
            <li>The Drive, Episode 175. <a href="https://peterattiamd.com/mattkaeberlein2/">link</a> TODO => listen and confirm the discussion around lifespan is mostly about time after first major illness.</li>
          </ul>

        </div>
    );
}



export default CPPModeling;
