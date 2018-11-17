# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

    config.vm.box = "centos/7"

    config.vm.define "monitor-1" do |machine|
        machine.vm.hostname = "monitor-1"
        machine.vm.network "private_network", ip: "192.168.33.51"
        machine.vm.network "forwarded_port", guest: "3000", host: "3000"
        machine.vm.network "forwarded_port", guest: "3001", host: "3001"
        machine.vm.network "forwarded_port", guest: "8000", host: "8000"
        machine.vm.network "forwarded_port", guest: "8001", host: "8001"
        machine.vm.network "forwarded_port", guest: "8005", host: "8005"
        machine.vm.network "forwarded_port", guest: "80", host: "80"
        machine.vm.provision :shell, :path => "bootstrap/bootstrap-common.sh"
        machine.vm.provider "virtualbox" do |vb|
            vb.memory = 1536
            vb.cpus = 1
        end
    end

    config.vm.define "client-1" do |machine|
        machine.vm.hostname = "client-1"
        machine.vm.network "private_network", ip: "192.168.33.101"
        machine.vm.provision :shell, :path => "bootstrap/bootstrap-common.sh"
        machine.vm.provider "virtualbox" do |vb|
            vb.memory = 256
            vb.cpus = 1
        end
    end

end
