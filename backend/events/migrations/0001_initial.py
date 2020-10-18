# Generated by Django 3.1.2 on 2020-10-18 15:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('source_event_id', models.CharField(help_text='Event ID used at source', max_length=255)),
                ('source_url', models.CharField(blank=True, help_text='Event details URL at source', max_length=4095, null=True)),
                ('source_license', models.CharField(blank=True, help_text='License under which source published event data', max_length=255, null=True)),
                ('name', models.CharField(help_text='Event title', max_length=255)),
                ('description', models.TextField(blank=True, help_text='Plain text event description and details', null=True)),
                ('formatted_description', models.TextField(blank=True, help_text=('HTML event description and details (if available from source, otherwise matches plain text description). Will only contain these HTML tags: b, br, em, i, li, p, span, strong, ul.',), null=True)),
                ('url', models.CharField(blank=True, help_text='Event website', max_length=4095, null=True)),
                ('start_date', models.DateField(help_text='Start date as YYYY-MM-DD')),
                ('start_time', models.TimeField(blank=True, help_text='Start time as HH:MM:SS (optional)', null=True)),
                ('end_date', models.DateField(blank=True, help_text='Ende date as YYYY-MM-DD (optional)', null=True)),
                ('end_time', models.TimeField(blank=True, help_text='End time as HH:MM:SS (optional)', null=True)),
                ('performer', models.CharField(blank=True, help_text='Main event performer (e.g. speaker, band, etc.)', max_length=255, null=True)),
                ('mode', models.CharField(blank=True, help_text='Event mode (e.g. presentation, meetup, etc.)', max_length=255, null=True)),
            ],
            options={
                'ordering': ['start_date', 'start_time'],
            },
        ),
        migrations.CreateModel(
            name='EventSource',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Name of event source', max_length=255, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(help_text='Description of event location (address or similar)', max_length=1023, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Organizer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Name of event organizer', max_length=255, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='EventImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=4095)),
                ('description', models.CharField(blank=True, max_length=4095, null=True)),
                ('source', models.CharField(blank=True, max_length=4095, null=True)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='events.event')),
            ],
        ),
        migrations.AddField(
            model_name='event',
            name='location',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='events', to='events.location'),
        ),
        migrations.AddField(
            model_name='event',
            name='organizer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='events', to='events.organizer'),
        ),
        migrations.AddField(
            model_name='event',
            name='source',
            field=models.ForeignKey(help_text='Source from which this event was gathered', on_delete=django.db.models.deletion.CASCADE, related_name='events', to='events.eventsource'),
        ),
        migrations.AddConstraint(
            model_name='event',
            constraint=models.UniqueConstraint(fields=('source', 'source_event_id'), name='unique_event'),
        ),
    ]