# Generated by Django 4.0 on 2022-12-04 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_doctor_department_id_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
                ('doctor', models.BigIntegerField()),
                ('Patient', models.BigIntegerField()),
                ('price', models.FloatField(null=True)),
            ],
        ),
    ]
