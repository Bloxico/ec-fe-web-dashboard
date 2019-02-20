// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';

import { THEME_PREFIX } from 'src/constants';
import Header from '@partials/Header';
import { Loader, Button, Form, FormField, Modal } from '@ui';

import Chart from './Chart';

type Props = {
  MSGDashboard: string,
  MSGCO2Prevented: string,
  fetchDashboardData: Function,
  fetchExchangeRate: Function,
  chartData: [],
  virtualBalance: number,
  dashboardBalance: number,
  fetchDashboardDataInProgress: boolean,
  setPasswordInProgress: boolean,
  setPasswordCompleted: boolean,
  profileData: any,
  MSGTotalAccumulated: string,
  MSGEnergyShort: string,
  MSGBicycleBits: string,
  MSGExchangeRateFailed: string,
  MSGEuroShort: string,
  MSGContinue: string,
  MSGSetYourPassword: string,
  MSGPassword: string,
  MSGRepeatPassword: string,
  enrgEurValue: number,
  MSGPrevented: string,
  MSGTime: string,
  MSGOfCO2: string,
  requiredIntl: Function,
  passwordIntl: Function,
  matchIntl: Function,
  handleSubmit: Function,
  handleSetPassword: Function,
};

const baseClass = `${THEME_PREFIX}-dashboard`;

class Dashboard extends Component<Props> {
  constructor(props: Props) {
    super(props);

    const { requiredIntl, passwordIntl, matchIntl } = props;

    this.passwordField = React.createRef();
    this.validators = {
      requiredValidator: requiredIntl,
      passwordValidator: passwordIntl,
      matchValidator: value =>
        matchIntl(value, this.passwordField.current.value),
    };
  }
  componentDidMount() {
    const { fetchDashboardData, fetchExchangeRate } = this.props;
    fetchDashboardData(3);
    fetchExchangeRate();
  }

  passwordField: any;
  validators: any;

  render() {
    const {
      MSGDashboard,
      MSGCO2Prevented,
      MSGTotalAccumulated,
      MSGEnergyShort,
      MSGBicycleBits,
      MSGExchangeRateFailed,
      MSGTime,
      MSGPrevented,
      MSGOfCO2,
      MSGEuroShort,
      MSGContinue,
      MSGSetYourPassword,
      MSGPassword,
      MSGRepeatPassword,
      chartData,
      virtualBalance,
      dashboardBalance,
      fetchDashboardDataInProgress,
      setPasswordInProgress,
      setPasswordCompleted,
      profileData,
      enrgEurValue,
      handleSubmit,
      handleSetPassword,
    } = this.props;

    const {
      requiredValidator,
      passwordValidator,
      matchValidator,
    } = this.validators;

    return (
      <div className={baseClass}>
        {fetchDashboardDataInProgress && <Loader />}
        {!fetchDashboardDataInProgress && (
          <React.Fragment>
            <Header action="menu" title={MSGDashboard} />
            {profileData && !profileData.hasPassword && !setPasswordCompleted && (
              <Modal
                show={!profileData.hasPassword && !setPasswordCompleted}
                hasClose={false}
                className={`${baseClass}__modal`}
              >
                <div className={baseClass}>
                  <header>
                    <h4 className={`${baseClass}__modal--title`}>
                      {MSGSetYourPassword}
                    </h4>
                  </header>
                  <section>
                    <Form onSubmit={handleSubmit(handleSetPassword)}>
                      <Field
                        placeholder={MSGPassword}
                        type="password"
                        component={FormField}
                        name="password"
                        width="full"
                        validate={[requiredValidator, passwordValidator]}
                        ref={this.passwordField}
                      />
                      <Field
                        placeholder={MSGRepeatPassword}
                        type="password"
                        component={FormField}
                        name="matchPassword"
                        width="full"
                        validate={[
                          requiredValidator,
                          passwordValidator,
                          matchValidator,
                        ]}
                      />
                      <Button
                        type="primary"
                        size="large"
                        width="full"
                        action="submit"
                        busy={setPasswordInProgress}
                      >
                        {MSGContinue}
                      </Button>
                    </Form>
                  </section>
                </div>
              </Modal>
            )}
            <section className={`${baseClass}__content`}>
              <dl className={`${baseClass}__info`}>
                <dt className={`${baseClass}__title`}>{MSGTotalAccumulated}</dt>
                <dd className={`${baseClass}__total`}>
                  {MSGEnergyShort}{' '}
                  {dashboardBalance && dashboardBalance.toFixed(2)}
                </dd>

                <dd className={`${baseClass}__note`}>
                  {(enrgEurValue &&
                    `1 ${MSGEnergyShort} = ${enrgEurValue.toFixed(
                      4,
                    )} ${MSGEuroShort}`) ||
                    MSGExchangeRateFailed}
                </dd>
              </dl>

              <div className={`${baseClass}__group`}>
                <dl className={`${baseClass}__info`}>
                  <dt className={`${baseClass}__title`}>{MSGBicycleBits}</dt>
                  <dd className={`${baseClass}__amount`}>
                    {virtualBalance && virtualBalance.toFixed(2)}
                  </dd>
                </dl>
              </div>
            </section>
            {chartData && chartData.length > 0 && (
              <section className={`${baseClass}__chart`}>
                <Chart
                  data={chartData}
                  timeMSG={MSGTime}
                  preventedMSG={MSGPrevented}
                  ofCO2MSG={MSGOfCO2}
                  title={MSGCO2Prevented}
                />
              </section>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Dashboard;
