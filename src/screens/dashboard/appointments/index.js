import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Container from '../../../components/container';
import Section from '../../../components/section';
import Spacer from '../../../components/spacer';
import Conditional from '../../../components/conditional';
import ExpertHeader from '../../../components/expertHeader';
import Dates from './components/dates';
import Visits from './components/visits';
import Patients from './patients';
import {getAppointmentsList} from '../../../redux/actions/appointments';
import {getDateRange} from '../../../utils/helper';
import {clearMedicalHistory} from '../../../redux/actions/patientProfile';
import moment from 'moment';
import _ from 'lodash';
import styles from './styles';

const ExpertAppointments = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);
  const uid = useSelector((state) => state.authLoading.userData.uid);
  const visitData = useSelector((state) => state.appointments.history);
  const screens = useSelector((state) => state.navigator);

  const [visits, setVisits] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dates, setDates] = useState([]);
  const [search, setSearch] = useState(visits);
  const fromConfirm = screens.previousRoute === 'Confirm';

  useEffect(() => {
    dispatch(clearMedicalHistory());
  }, []);

  useEffect(() => {
    dispatch(
      getAppointmentsList({
        uid,
      }),
    );

    const dateRange = getDateRange(
      moment(new Date()).subtract(3, 'days'),
      moment().add(30, 'days'),
      'YYYY-MM-DD',
    ).reverse();

    setDates(dateRange);
    setSelectedDate(dateRange[3]);
  }, []);

  useEffect(() => {
    dispatch(
      getAppointmentsList({
        uid,
      }),
    );

    const dateRange = getDateRange(
      moment(new Date()).subtract(3, 'days'),
      moment().add(30, 'days'),
      'YYYY-MM-DD',
    ).reverse();

    setDates(dateRange);
    setSelectedDate(dateRange[3]);
  }, [fromConfirm]);

  useEffect(() => {
    dispatch(
      getAppointmentsList({
        uid,
      }),
    );
  }, [selectedDate]);

  useEffect(() => {
    let record = _.flatten(visitData);
    if (record.length > 1 && selectedDate) {
      let filtered = record.filter((visit) => {
        let appointment = moment(visit.time);
        let now = moment(new Date());
        if (appointment.diff(now, 'hours') >= -1) {
          return visit;
        }
      });

      filtered = filtered.sort((a, b) => {
        return (
          parseInt(moment(a.time).format('x')) -
          parseInt(moment(b.time).format('x'))
        );
      });

      let current = filtered.filter((visit) => {
        return moment(visit.time).format('YYYY-MM-DD') === selectedDate;
      });

      setVisits([...current]);
      setSearch([...current]);
    } else {
      setVisits([...record]);
      setSearch([...record]);
    }
  }, [visitData, selectedDate]);

  return (
    <Container>
      <Section>
        <View style={styles.container}>
          <View style={styles.header}>
            <ExpertHeader title={lang.expertAppointments.title} />
          </View>
          <ScrollView>
            <Dates
              setSelectedDate={setSelectedDate}
              selectedDate={selectedDate}
              dates={dates}
            />
            <Conditional if={visits.length > 0}>
              <Visits selectedDate={selectedDate} search={search} />
            </Conditional>

            <Conditional if={!visits.length}>
              <Text style={styles.title}>
                {lang.expertAppointments.noVisitsToday}
              </Text>
            </Conditional>
          </ScrollView>
        </View>
      </Section>
      <Spacer />
      <Section>
        <View style={styles.containerRight}>
          <Patients />
        </View>
      </Section>
    </Container>
  );
};

export default ExpertAppointments;
